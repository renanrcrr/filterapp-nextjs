const SearchProducts = (props) => { 
        return (
            <div className="search-products row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchPdts"
                  type="text"
                  className="form-control"
                  aria-label="Search Products"
                  onChange={e => props.searchPdts(e.target.value)}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-primary dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Sort by: <span className="caret" />
                  </button>
    
                  <div className="sort-menu dropdown-menu dropdown-menu-right">
                    <button className={
                        'sort-by dropdown-item ' + 
                        (props.orderBy === 'title' ? 'active' : '')
                    } 
                    onClick={e => props.changeOrder('title', props.orderDir)}
                    href="#">
                      Product 
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (props.orderBy === 'registrationDate' ? 'active' : '')
                    } 
                    onClick={e => props.changeOrder('registrationDate', props.orderDir)}
                    href="#">
                      Date
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (props.orderBy === 'vendor' ? 'active' : '')
                    } 
                    onClick={e => props.changeOrder('vendor', props.orderDir)}
                    href="#">
                      Vendor
                    </button>
                    <div role="separator" className="dropdown-divider" />
                    <button className={
                        'sort-by dropdown-item ' + 
                        (props.orderDir === 'asc' ? 'active' : '')
                    } 
                    onClick={e => props.changeOrder(props.orderBy, 'asc')}
                    href="#">
                      Asc
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (props.orderDir === 'desc' ? 'active' : '')
                    } 
                    onClick={e => props.changeOrder(props.orderBy, 'desc')}
                    href="#">
                      Desc
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    
}

export default SearchProducts;