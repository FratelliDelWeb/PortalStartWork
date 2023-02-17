const FormContent = () => {
  return (
    <form method="post" action="add-parcel.html">
      <div className="form-group">
        <label>Nome</label>
        <input type="text" name="nome" placeholder="nome" required />
      </div>
      {/* name */}

      <div className="form-group">
        <label>Email</label>
        <input
          id="email-field"
          type="email"
          name="email"
          placeholder="eamil"
        />
      </div><div className="form-group">
        <label>Professione</label>
        <input
          id="prof-field"
          type="text"
          name="professione"
          placeholder="professione"
        />
      </div>
      {/* password */}

      <div className="form-group">
        <button className="theme-btn btn-style-one" type="submit">
        INVIA CANDIDATURA
        </button>
      </div>
      {/* login */}
    </form>
  );
};

export default FormContent;
