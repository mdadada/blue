import "./styles.css";
import { useState, FC, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate, useLocation } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column"
  },
  img: {
    width: "100%"
  },
  input: {
    width: "40%",
    backgroundColor: "white"
  },
  inputBase: {
    color: "#950623"
  }
});

interface QuestProp {
  title: string;
  answer: string;
  next: string;
  hint: string;
  imgPath: string;
  buttonMessage: string;
  prevPath: string;
  setPrevPath: (prev: string) => void;
}

const Quest: FC<QuestProp> = ({
  title,
  answer,
  next,
  hint,
  imgPath,
  buttonMessage,
  prevPath,
  setPrevPath
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  const [req, setReq] = useState("");
  const [img, setImg] = useState("");

  const handleClick = () => {
    if (req !== answer) {
      window.alert("それは違うようだ…");
      return;
    }
    navigate(next);
  };

  useEffect(() => {
    setPrevPath(location.pathname);
    import(imgPath).then((res) => {
      setImg(res.default);
    });
    return () => {};
  }, []);

  return (
    <div className={classes.root}>
      <Box mx={50}>
        <Box my={10}>
          <h1>{title}</h1>
        </Box>
        <Box my={10} sx={{ display: "flex", justifyContent: "center" }}>
          <img className={classes.img} src={img} alt="img" />
        </Box>
        <Box my={10} sx={{ display: "flex", justifyContent: "center" }}>
          <TextField
            className={classes.input}
            onChange={(e) => {
              setReq(e.target.value);
            }}
            id="outlined-basic"
            variant="filled"
            label="答えをここに入力してね！"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              className: classes.inputBase
            }}
          />
        </Box>
        <Box my={10} sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={handleClick}
            variant="contained"
            sx={{
              width: "30%",
              "&.MuiButton-contained": {
                backgroundColor: "#950623"
              },
              "&.MuiButton-root": {
                fontWeight: "bold"
              }
            }}
          >
            {buttonMessage}
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: 10,
            marginBottom: 20,
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Accordion sx={{ width: "40%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>協力要請をする</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{hint}</Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
};

export default Quest;
