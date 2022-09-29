//Quilted image list Material UI
import GaleriaList from "../components/GaleriaList";
import { client, urlForImage } from "../lib/client";
import { useState, useEffect } from "react";
import { number } from "prop-types";

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
    console.log(galeriaState);

    var filteredBySelectionGaleria = galeriaState.filter((galeria) =>
      Object.keys(selectedGaleries).find(
        () => selectedGaleries[galeria.slug.current] === true
      )
    );

    console.info(filteredBySelectionGaleria);
    var mergedImageUrls = [];

    for (const galeriaItem of filteredBySelectionGaleria) {
      console.log(galeriaItem.images.map((img) => urlForImage(img).url()));

      mergedImageUrls = mergedImageUrls.concat(
        galeriaItem.images.map((img) => urlForImage(img).url())
      );
    }

    seMergedGaleria(mergedImageUrls);
  }, [selectedGaleries]);

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
                    key={_id}
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
