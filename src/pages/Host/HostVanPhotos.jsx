import { useOutletContext } from "react-router-dom";
export default function HostVanPhotos() {
  const { currVan } = useOutletContext();
  return (
    <section>
      <img src={currVan.imageUrl} alt="image of a van" />
    </section>
  );
}
