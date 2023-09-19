import { stockData } from "./data";
import React,{useState,SyntheticEvent} from 'react';
import "../index.css"
import { Stock } from "./Stock";
import EditStock from "./EditStock";
import { Col,Form} from "react-bootstrap";



const handleChange = (event: any) => {
}
const handleSubmit = (event: SyntheticEvent) => {
  event.preventDefault();
  // alert("handle submit " + isValid())
  // if (!isValid()) return;
  // onSave(project);
  //onCancel();
  };

  interface StockFormProps {
    stock: Stock;  
    
  }
export const Stocks = () => {
   const [stockBeingEdited,setStockBeingEdited]=useState({});
    
   const handleEdit=(stock:Stock)=> {
     alert("ProjectForm " + JSON.stringify(stock, null, 2));
     setStockBeingEdited(stock);
   };
   
    const cancelEditing=() =>{
      setProjectBeingEdited({});
  };
   
     return (
     <>
        <div className="stock-container">
         {stockData.map((stock, key) => {
           return (
            <div key={key}>
              {stock===stockBeingEdited ?(
                <StockForm 
                  stock={stock}
                />
          ) : (
             <StockCard stock={stock}  />
            )}
           </div>
           );
         })}
       </div>
       
       
       

      </>
   );
 };





const StockCard = ({stock}: StockFormProps) => {
     const handleEdit=(stock:Stock)=> {
       alert("here " + JSON.stringify(stock, null, 2));
       //setStockBeingEdited(stock);
     };
  return (
    
    <div className="cards">
      <div className="card">
        <small> {stock.company}</small> 
        <div>
          <small>{stock.ticker} </small>
        </div>
        <div>
          <h1>{stock.stockPrice}</h1>
        </div>
        <div>
          <small>{stock.timeElapsed}</small>
        </div>
         
        {/* <button
          className=" bordered"
          onClick={() => {
             handleEdit(stock);
          }}
        > Modify</button> */}
      </div>
      <hr></hr>
      
    </div>
    
  );
};

const StockForm = ({stock: initialStock}: StockFormProps) => {
   const [stock,setStock]=useState(initialStock);
    // if (!props.company) return <div />;
    
    
    return (
        
      <Form.Group className="input-group vertical" onSubmit={handleSubmit}>
        {'Project name'}
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
        {'Description'}
        <Col>
            <Form.Control  
              type ="text"
              defaultValue={stock.stockPrice}
              name="stockPrice"
              placeholder="Description"
              onChange={handleChange}
            />
             {/* {errors.description.length > 0 && (
                <div className="card error">
                  <p>{errors.description}</p>
                </div>
              )} */}
        </Col>
        {'Budget'}
        <Col>
              <Form.Control
                type="text"
                name="budget"
                defaultValue={stock.ticker}
                placeholder="Project Budget"
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
      </Form.Group>

);
};
  










