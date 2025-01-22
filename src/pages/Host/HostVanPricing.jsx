import { useOutletContext } from "react-router-dom";
export default function HostVanPricing() {
  const { currVan } = useOutletContext();
  return (
    <section>
      <h4>
        <span style={{ color: "#E11D48" }}>Price</span> : {currVan.price}{" "}
        dollars per day
      </h4>
    </section>
  );
}
