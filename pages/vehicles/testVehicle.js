import React, { useState } from "react";
import Layout from "../../components/layout";
import MainRegistration from "../../components/Main/main";
import Modal from "../../components/Main/modal";
import VehicleDetail from "../../components/Main/vehicleDetail";

export default function TestVehicle({ data }) {
    const [isOpened, setIsOpened] = useState(false);
    const [vehicle, setVehicle] = useState({});


    const handleClick = (registration) => {
        setVehicle(() => data.find(d => d.registration === registration));
        vehicle && setIsOpened(prev => !prev)
    };

    return (
        <Layout>
            <MainRegistration vehicles={data} onShow={handleClick} />
            {isOpened && <Modal onShow={() => setIsOpened(false)}>
                <h2>Vehicle detail info</h2>
                <VehicleDetail vehicle={vehicle} />
            </Modal>}
        </Layout>
    );
}

export async function getServerSideProps() {
    const res = await fetch(
        `https://beta.check-mot.service.gov.uk/trade/vehicles/mot-tests?registration`,
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
