import React from "react";
import Layout from "../../components/layout";
import MainRegistration from "../../components/Main/main";
import NotFoundVehicle from "../../components/Main/NotFoundVehicle";

export default function VehicleFound({ data }) {
  return (
    <Layout>
      {data.length ? <MainRegistration vehicles={data} /> : <NotFoundVehicle />}
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const registration = context.query;
  const res = await fetch(
    `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration=${registration}`,
    {
      headers: {
        "x-api-key": "fZi8YcjrZN1cGkQeZP7Uaa4rTxua8HovaswPuIno",
      },
    }
  );
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
