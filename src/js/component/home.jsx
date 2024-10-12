import React, {useState, useEffect} from "react";

const firstState = { 
    stateRojo: "",
    stateAmarillo: "",
    stateVerde: "",
}

const TrafficLight = () => {
  const [color, setColor] = useState({firstState}); 

  useEffect(() => { 
    setColor({stateRojo: "on"});
  }, []); 

  return (
        <div>
            <div id="tube"></div>
                <div id="box">
                    <div className= {"rojo " + color.stateRojo}
                        onClick={() => setColor({stateRojo: "on"})}>
                    </div>
					<div className= {"amarillo " + color.stateAmarillo}
                        onClick={() => setColor({stateAmarillo: "on"})}>
                    </div>
					<div className= {"verde " + color.stateVerde}
                        onClick={() => setColor({stateVerde: "on"})}>
                    </div>

        </div>
</div>
      
  );
};

export default TrafficLight;
