import "./filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h2 className="fillter__title">Filter by status</h2>
      <div className="filter__checkbox">
        <div className="filter__checkbox--radio">
          <input name="drone" id="All" className="filter__input " type="radio" />
          <label htmlFor="All" className="filter__label" >
            All
          </label>
          <span>(10)</span>
        </div>
        <div className="filter__checkbox--radio">
          <input name="drone" id="Completed" className="filter__input" type="radio" />
          <label htmlFor="Completed" className="filter__label" >
            Completed
          </label>
          <span>(10)</span>
        </div>
        <div className="filter__checkbox--radio">
          <input name="drone" id="Active" className="filter__input" type="radio" />
          <label htmlFor="Active" className="filter__label" >
            Active
          </label>
          <span>(10)</span>
        </div>
      </div>
    </div>
  );
};

export default Filter;
