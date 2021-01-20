//import the class with all components react
import {Component} from 'react';

//When extends from Component this SearchProducts become a component
class SearchProducts extends Component {
    render() {
        return (
            <div className="search-products row justify-content-center my-4">
            <div className="col-md-6">
              <div className="input-group">
                <input
                  id="SearchPdts"
                  type="text"
                  className="form-control"
                  aria-label="Search Products"
                  /* call method searchPdts sending the value from field */
                  onChange={e => this.props.searchPdts(e.target.value)}
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
                        (this.props.orderBy === 'productName' ? 'active' : '')
                    } 
                    //It calls the method changeOrder when clicked in the filter
                    onClick={e => this.props.changeOrder('productName', this.props.orderDir)}
                    href="#">
                      Product 
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderBy === 'registrationDate' ? 'active' : '')
                    } 
                    onClick={e => this.props.changeOrder('registrationDate', this.props.orderDir)}
                    href="#">
                      Date
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderBy === 'vendor' ? 'active' : '')
                    } 
                    onClick={e => this.props.changeOrder('vendor', this.props.orderDir)}
                    href="#">
                      Vendor
                    </button>
                    <div role="separator" className="dropdown-divider" />
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderDir === 'asc' ? 'active' : '')
                    } 
                    onClick={e => this.props.changeOrder(this.props.orderBy, 'asc')}
                    href="#">
                      Asc
                    </button>
                    <button className={
                        'sort-by dropdown-item ' + 
                        (this.props.orderDir === 'desc' ? 'active' : '')
                    } 
                    onClick={e => this.props.changeOrder(this.props.orderBy, 'desc')}
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
}

export default SearchProducts;