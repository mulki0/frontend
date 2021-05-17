import './App.css';
import Tab from './Tab';
import EmployeeList from './EmployeeList';


function App() {

  return (
    <div className="App">
      <Tab/>

      <div 
        id="card-section"
        className="d-flex my-4 justify-content-between"
        style={{minHeight: 'calc(100vh - 462px)'}}>

        <div class="container">
          <div class="row">
            <div class="col">
              <EmployeeList 
                avatar="./emily.jpg" 
                name="Emily Nicholson" 
                email="enicholson@gmail.com" 
                position="SENIOR CREATIVE DIRECTOR"
              />
            </div>

            <div class="col">
              <EmployeeList
                avatar="./justine.jpg" 
                name="Justine Hoffmann" 
                email="ahoffman@gmail.com" 
                position="SENIOR UI DESIGNER"
              />
            </div>

            <div class="col">
              <EmployeeList
                avatar="./clive.jpg" 
                name="Clive Walton" 
                email="cwalton@gmail.com" 
                position="SENIOR COPYWRITER"
              />
            </div>
            <div class="col">
              <EmployeeList
                avatar="./zach.jpg" 
                name="Zach Morton" 
                email="zmorton@gmail.com" 
                position="SENIOR UX DESIGNER"
              />
            </div>

            <div class="col">
              <EmployeeList 
                avatar="./madison.jpg" 
                name="Madison Hewitt" 
                email="mhewitt@gmail.com" 
                position="CREATIVE DIRECTOR"
              />
            </div>

            <div class="col">
              <EmployeeList 
                avatar="./tilda.jpg" 
                name="Tilda Nelson" 
                email="tnelson@gmail.com" 
                position="ART DIRECTOR"
              />
            </div>
            
          </div>
        </div>

      </div>



    </div>
  );
}

export default App;


