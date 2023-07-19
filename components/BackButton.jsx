import Image from "next/image";

function BackButton({ router }) {
  return (
    <div
      className="backButton"
      onClick={() => {
        router.back();
      }}
    >
      <Image
        width={20}
        height={20}
        alt="back button"
        src="/img/backarrow.svg"
      />
    </div>
  );
}

export default BackButton;
