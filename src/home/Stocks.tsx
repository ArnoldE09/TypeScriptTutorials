import { stockData } from "./data";
import React,{useState,SyntheticEvent} from 'react';
import "../index.css"
import { Stock } from "./Stock";
import { Col,Form} from "react-bootstrap";



// const handleChange = (event: any) => {
// }
// const handleSubmit = (event: SyntheticEvent) => {
//   event.preventDefault();
//   // alert("handle submit " + isValid())
//   // if (!isValid()) return;
//   // onSave(project);
//   //onCancel();
//   };

   interface stockListProps {
    stock: Stock;  
    onSave:(stock:Stock)=>void;
   }

   interface stockFormProps {
    stock: Stock;  
    onSave: (stock: Stock) => void;
    onCancel: () => void;
  }
export const Stocks = ({ stock,onSave }: stockListProps) => {
  
  const [stocktBeingEdited,setStockBeingEdited]=useState({});
  const handleEdit=(stock:Stock)=> {
    setStockBeingEdited(stock);
  };

  const cancelEditing=() =>{
    setStockBeingEdited({});
};
   
  return (
    <>
      
        {stockData.map((stock,key) => (
           
              
                <div className="rows">
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
    
    
    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      alert("stock " + JSON.stringify(stock, null, 2));
      // alert("handle submit " + isValid())
      // if (!isValid()) return;
      onSave(stock);
      //onCancel();
      };

      const handleChange = (event: any) => {
      
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
          alert("here")
          updatedStock = new Stock({ ...p, ...change });
          return updatedStock;
        });
        // setErrors(() => validate(updatedProject));
      };
    
    return (
        
      <Form.Group className="input-group vertical" onSubmit={handleSubmit}>
        <div className="card">
        {'Company name'}
          <Col>
              <Form.Control
                type="text"
                name="name"
                defaultValue={stock.company}
                placeholder="Company  Name"
                onChange={handleChange}
              />
              {/* {errors.name.length > 0 && (
                <div className="card error">
                  <p>{errors.name}</p>
                </div>
              )} */}
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
              {/* {errors.description.length > 0 && (
                  <div className="card error">
                    <p>{errors.description}</p>
                  </div>
                )} */}
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
              {/* {errors.budget.length > 0 && (
              <div className="card error">
                <p>{errors.budget}</p>
              </div>
              )}             */}
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
  










