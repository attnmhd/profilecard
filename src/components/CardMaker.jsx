import React, { useState } from "react";

function CardMaker(props) {
  const [card, setCard] = useState({
    nama: "",
    pekerjaan: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setCard((prevCard) => {
      return {
        ...prevCard,
        [name]: value,
      };
    });
  }
  function submitCard(event) {
    props.onAdd(card);
    setCard({
      nama: "",
      pekerjaan: "",
    });
    event.preventDefault();
  }
  return (
    <div className="shadow-xl mb-40 px-4 w-screen flex  fixed justify-center items-center">
      <form className="flex justify-center gap-4  ">
        <input
          name="nama"
          onChange={handleChange}
          value={card.nama}
          placeholder="Nama"
        />
        <input
          name="pekerjaan"
          onChange={handleChange}
          value={card.pekerjaan}
          placeholder="Pekerjaan"
        />
        <button className=" bg-teal-200" onClick={submitCard}>Create</button>
      </form>
    </div>
  );
}

export default CardMaker;
