import { useOutletContext } from "react-router-dom";
export default function HostVanInfo() {
  const { currVan } = useOutletContext();
  return (
    <section>
      <h4>
        <span style={{ color: "#E11D48" }}>Name</span> : {currVan.name}
      </h4>
      <h4>
        <span style={{ color: "#E11D48" }}>Category</span> : {currVan.type}
      </h4>
      <h4>
        <span style={{ color: "#E11D48" }}>Description</span> :{" "}
        {currVan.description}
      </h4>
      <h4>
        <span style={{ color: "#E11D48" }}>Visibility</span> : public
      </h4>
    </section>
  );
}
