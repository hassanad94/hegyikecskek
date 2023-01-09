import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Link from "@mui/material/Link";

export default function CoachPreviewCard({ coach }) {
  const { name, price, isEuro, introduction, titles, hero, web } = coach;

  console.log(price);

  return (
    <Card sx={{ maxWidth: 300 }} className="coach-preview-card" data-web={web}>
      <CardContent>
        <div className="name">{name}</div>

        {titles && <div className="title">{titles.join(", ")}</div>}
      </CardContent>
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="230"
        image={hero}
        alt="Edző profilképe"
      />
      <CardContent>
        <b>EdzésTervezés </b>
        {price}
        {!isEuro ? " Ft" : " EUR"} / hó - tól
      </CardContent>
      <CardContent sx={{ padding: "10px", textAlign: "left" }}>
        {introduction && `${introduction.slice(0, 78)}...`}
      </CardContent>
      <CardContent>
        <Link sx={{ textDecoration: "none" }} href={`/edzoink/${web}`}>
          <div className="buttonWithArrow button">Olvass rólam többet</div>
        </Link>
      </CardContent>
    </Card>
  );
}
