import { stockData } from "./data";
import React,{useState,SyntheticEvent} from 'react';
import "../index.css"
import { Stock  } from "./Stock";
import { Col,Form} from "react-bootstrap";



  interface stockListProps {
   stock: Stock;  
   onSave:(stock:Stock)=>void;
   appName:string;
  }

  interface stockFormProps {
   stock: Stock;  
   onSave: (stock: Stock) => void;
   onCancel: () => void;
  }

  
export const Stocks = ({appName, stock,onSave }: stockListProps) => {
  
  const [stocktBeingEdited,setStockBeingEdited]=useState({});
  const handleEdit=(stock:Stock)=> {
    setStockBeingEdited(stock);
  };

  const cancelEditing=() =>{
    setStockBeingEdited({});
    //onCancel: () => void;
};
   
  return (
    <>
        <h1>{appName}</h1>
        {stockData.map((stock,key) => (
              <div className="cards">
                  {stock ===stocktBeingEdited ?(
                    <StockForm 
                      stock={stock}
                      onSave={onSave}
                      onCancel={cancelEditing}
                    />
                                
            ) : (
              <div className="card">
                <StockCard stock={stock} onEdit={handleEdit} />
              </div>          
            )}
           </div>  
           
            
        ))}
    </>
  )
 };

const StockCard = (props: any)  => {
  
  const { stock,onEdit } = props;
  
  const handleEditClick = (stockBeingEdited: Stock) => {
    // alert("projectBeingEdited " + JSON.stringify(stockBeingEdited, null, 2));
    onEdit(stockBeingEdited);    
    };
      return (
        <>
            
                <p> {'Name:'} {stock.company} {', '}{stock.stockPrice} </p>
            
               <p>{'Elapsed:'}{stock.timeElapsed }</p>
           
            <button
            className=" bordered"
            onClick={() => {
            handleEditClick(stock);
          }}
        >
          <span className="icon-edit "></span>
          Modify
        </button>
        
        </>
      );
};

const StockForm = ({stock:initialStock,onSave,onCancel}: stockFormProps) => {
  const [stock,setStock]=useState(initialStock);
  const [errors, setErrors] = useState({ ofcompany: '',  ofstockPrice: '',  ofticker: ''});
  const [isShown, setIsShown] = useState(false);
    
    
  const showToast = () => {
    setIsShown(true);

    setTimeout(() => {
      setIsShown(true);
    }, 1000);
  };

     const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      if (!isValid()) {
        showToast()
        return;
      }
      alert("handleSubmit " + JSON.stringify(stock, null, 2));
      onSave(stock);
      onCancel();
      };

      const handleChange = (event: any) => {
        setIsShown(false);
        
      
         const { type, name,  value, checked } = event.target;
        let updatedValue = type === 'checkbox' ? checked : value;
         if (type === 'number') {
            updatedValue = Number(updatedValue);
         }
         const change = {
           [name]: updatedValue,
         };
         let updatedStock: Stock;
        
        setStock((p) => {
          updatedStock = new Stock({ ...p, ...change });
          return updatedStock;
        });
        setErrors(() => validate(updatedStock));
      };
      function validate(stock: Stock) {
        let errors: any = { ofcompany: '', ofstockPrice: '', ofticker: '' };
        if (stock.company.length === 0) {
            errors.ofcompany = 'Company name is required';
        }
        if (stock.stockPrice.length === 0) {
           errors.ofstockPrice = 'Stock Price is required.';
        }
        if (stock.ticker.length === 0) {
            errors.ofticker = 'ticker is required';
        }
        return errors;
      }
      function isValid() {
         
        return (
          errors.ofcompany.length === 0 &&
          errors.ofstockPrice.length === 0 && 
          errors.ofticker.length === 0
          
        );
      }
    
      return (
        
        <Form.Group className="input-group vertical" onSubmit={handleSubmit}>
          <div className="card">
          {'Company name'}
            <Col>
                <Form.Control
                  type="text"
                  name="company"
                  defaultValue={stock.company}
                  placeholder="Company  Name"
                  onChange={handleChange}
                />
                    
                  {isShown && (
                    <div className='my-toast'>
                      <span className='my-toast__icon'>i</span>
                      <span>{errors.ofcompany}</span>
                    </div>
                  )}
                {errors.ofcompany.length > 0 && (
                  <div className="card-error">
                    <span>{errors.ofcompany}</span>
                  </div>
                )}
            </Col>
            {'Stock Price'}
            <Col>
                <Form.Control  
                  type ="text"
                  defaultValue={stock.stockPrice}
                  name="stockPrice"
                  placeholder="StockPrice"
                  onChange={handleChange}
                />
                {isShown && (
                    <div className='my-toast'>
                      <span className='my-toast__icon'>i</span>
                      <span>{errors.ofstockPrice}</span>
                    </div>
                  )}
                {errors.ofstockPrice.length > 0 && (
                  <div className="card-error">
                    <span>{errors.ofstockPrice}</span>
                  </div>
                )}
            </Col>
            {'ticker'}
            <Col>
                  <Form.Control
                    type="text"
                    name="ticker"
                    defaultValue={stock.ticker}
                    placeholder="ticker"
                    onChange={handleChange}
                  />
                
                {isShown && (
                    <div className='my-toast'>
                      <span className='my-toast__icon'>i</span>
                      <span>{errors.ofticker}</span>
                    </div>
                  )}
                {errors.ofticker.length > 0 && (
                  <div className="card-error">
                    <span>{errors.ofticker}</span>
                  </div>
                )}
                <div className="input-group">
                  <Form.Control
                    name="isActive"
                    type="submit"
                    onClick={handleSubmit}
                    value="Save"
                  />  
                  <Form.Control
                    type="button"
                    onClick={onCancel}
                    value="Cancel" 
                  />
              </div>
            </Col>
          </div>
        </Form.Group>
  
  );
  };  










