import React from 'react';
import "./properties-form.scss"

const PropertiesForm = () => {
  return (
    <div className="search-form p-4">
      <h3 className='mb-4'>Find your home</h3>
      <input type="text" placeholder="What are you looking for?" />

      <div className="form-group">
        <p>Type</p>
        <div className='d-flex'>
          <input type="radio" id="all" name="type" value="all" />
          <label htmlFor="all">All</label>
        </div>
        <div className='d-flex'>
          <input type="radio" id="rent" name="type" value="rent" />
          <label htmlFor="rent">Rent</label>
        </div>
        <div className='d-flex'>
          <input type="radio" id="sale" name="type" value="sale" />
          <label htmlFor="sale">Sale</label>
        </div>
      </div>

      <div className="form-group">
        <p>Category</p>
        <div className='d-flex'>
          <input type="radio" id="all-categories" name="category" value="all" />
          <label htmlFor="all-categories">All</label>
        </div>
        <div className='d-flex'>
          <input type="radio" id="houses" name="category" value="houses" />
          <label htmlFor="houses">Houses</label>
        </div>
        <div className='d-flex'>
          <input type="radio" id="apartments" name="category" value="apartments" />
          <label htmlFor="apartments">Apartments</label>
        </div>
        <div className='d-flex'>
          <input type="radio" id="offices" name="category" value="offices" />
          <label htmlFor="offices">Offices</label>
        </div>
        <div className='d-flex'>
          <input type="radio" id="villas" name="category" value="villas" />
          <label htmlFor="villas">Villas</label>
        </div>
      </div>

      <div className="form-group">
        <p>Price Range</p>
        <div className="price-range">
          <input type="number" placeholder="Min" />
          <input type="number" placeholder="Max" />
        </div>
      </div>

      <div className="form-group">
        <p>Location</p>
        <select>
          <option value="">City</option>
          {/* Şehir seçenekleri buraya eklenebilir */}
        </select>
      </div>

      <button className="btn-search"><i className='pi pi-search me-2'></i>Search</button>
    </div>
  );
};

export default PropertiesForm;
