import React from "react";
import SightingsList from "../components/SightingsList";
import Layout from "../components/Layout";

function Sightings() {
  return (
    <>
      <Layout>
        <div className="container mt-5">
          <SightingsList />
        </div>
      </Layout>
    </>
  );
}

export default Sightings;
