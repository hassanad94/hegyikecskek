//Quilted image list Material UI
import GaleriaList from "../components/GaleriaList";
import { client, urlForImage } from "../lib/client";
import { useState, useEffect } from "react";

export async function getStaticProps() {
  const query = `*[_type == "galeries"]`;
  var defaultData = await client.fetch(query);

  return {
    props: {
      defaultData,
    },
    revalidate: 1, // In seconds
  };
}

const Galeria = ({ defaultData }) => {
  var initGaleriaSelected = [];

  defaultData.forEach((galeria) => {
    initGaleriaSelected[galeria.slug.current] = true;
  });
  const [selectedGaleries, setSelectedGaleries] = useState(initGaleriaSelected);

  const [galeriaState, setGaleriaState] = useState(defaultData);

  const [mergedGaleria, seMergedGaleria] = useState(null);

  useEffect(() => {
    var filteredBySelectionGaleria = galeriaState.filter((galeria) =>
      Object.keys(selectedGaleries).find(
        () => selectedGaleries[galeria.slug.current] === true
      )
    );

    var mergedImageUrls = [];

    for (const galeriaItem of filteredBySelectionGaleria) {
      mergedImageUrls = mergedImageUrls.concat(
        galeriaItem.images?.map((img) => urlForImage(img).url())
      );
    }

    seMergedGaleria(mergedImageUrls);
  }, [selectedGaleries, galeriaState]);

  return (
    <>
      <div className="section intro no-hero">
        <div className="content">
          <h1>Galeria</h1>

          <div className="galeria-selector">
            {defaultData &&
              defaultData.map((galeria) => {
                const { category, slug, _id } = galeria;

                let isSelected = selectedGaleries[slug.current];

                return (
                  <div
                    key={slug.current}
                    onClick={() => {
                      setSelectedGaleries((prev) => ({
                        ...prev,
                        [slug.current]: !prev[[slug.current]],
                      }));
                    }}
                    className={`button btn center ${
                      isSelected ? "selected" : ""
                    }`}
                  >
                    {category}
                  </div>
                );
              })}
          </div>

          <GaleriaList images={mergedGaleria} />
        </div>
      </div>
    </>
  );
};

export default Galeria;
