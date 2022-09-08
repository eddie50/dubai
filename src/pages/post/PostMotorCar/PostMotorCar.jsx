import "./PostMotorCar.scss";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const PostMotorCar = () => {
  const [emirate, setEmirate] = useState("Dubai");
  const [model, setModel] = useState(carModels[0]);
  const [trim, setTrim] = useState("");
  const [regionalSpec, setRegionalSpec] = useState("");
  const [year, setYear] = useState("");
  const [kilometers, setKilometers] = useState("");
  const [isInsured, setIsInsured] = useState("");
  const [price, setPrice] = useState("");
  const [phone, setPhone] = useState("");


  const handleChange = (event) => {
    setEmirate(event.target.value);
  };
  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="postMotorCarPage">
      <h1>
        Dub<span>i</span>zzle
      </h1>
      <div className="container">
        <h3>Tell us about your car</h3>
        <form>
          <Box sx={{ minWidth: 120 }} className='inputsContainer'>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">Emirate</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={emirate}
                label="Emirate"
                onChange={handleChange}
              >
                {emirates.map((item) => (
                  <MenuItem value={item} key={item}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Autocomplete
              value={model}
              onChange={(event, newValue) => {
                setModel(newValue);
              }}
              disablePortal
              id="combo-box-demo"
              options={carModels}
              sx={{ width: "100%" }}
              renderInput={(params) => (
                <TextField {...params} label="Make & Model" />
              )}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Trim</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={trim}
                label="Trim"
                onChange={(e) => setTrim(e.target.value)}
              >
                {modelDetails.map((item) => {
                  if (item.title === model) {
                    return item.type.map((typee) => (
                      <MenuItem value={typee} key={typee}>
                        {typee}
                      </MenuItem>
                    ));
                  }
                })}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Regional Spec
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={regionalSpec}
                label="Regional Spec"
                onChange={(e) => setRegionalSpec(e.target.value)}
              >
                {modelDetails.map((item) => {
                  if (item.title === model) {
                    return item.regionalSpec.map((reg) => (
                      <MenuItem value={reg} key={reg}>
                        {reg}
                      </MenuItem>
                    ));
                  }
                })}
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Year"
              variant="outlined"
              sx={{ width: "100%" }}
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Kilometers"
              variant="outlined"
              sx={{ width: "100%" }}
              value={kilometers}
              onChange={(e) => setKilometers(e.target.value)}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Is Card Insured in UAE?
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={isInsured}
                label="IsCardInsuredinUAE"
                onChange={(e) => setIsInsured(e.target.value)}
              >
                <MenuItem value={true}>Yes</MenuItem>
                <MenuItem value={false}>No</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="outlined-basic"
              label="Price"
              variant="outlined"
              sx={{ width: "100%" }}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              sx={{ width: "100%" }}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Button variant="contained" sx={{margin:"auto",marginTop:'1em',width:'250px'}}  size='large'>Next</Button>
          </Box>
        </form>
      </div>
    </div>
  );
};
// <MenuItem value={item} key={item}>
//   {item}
// </MenuItem>
export default PostMotorCar;

const emirates = [
  "Dubai",
  "Abu Dhabi",
  "Ras al Khaimah",
  "Sharjah",
  "Fujairah",
  "Ajman",
  "Umm al Quwain",
  "Al Ain",
];
const carModels = ["pride", "207", "206"];

const modelDetails = [
  {
    title: "pride",
    type: ["111", "132", "141", "151"],
    regionalSpec: ["Iranian", "Korean"],
  },
  {
    title: "206",
    type: ["Tip 2", "Tip 3", "Tip 5"],
    regionalSpec: ["Iranian", "French"],
  },
  {
    title: "207",
    type: ["sport", "nonSport"],
    regionalSpec: ["Iranian", "French"],
  },
];
