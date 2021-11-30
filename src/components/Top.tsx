import "./styles.css";
import { makeStyles } from "@material-ui/styles";
import img from "../assets/sample.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    display: "flex",
    flexDirection: "column"
    // backgroundColor: "#000000"
  },
  img: {
    width: "100%",
    height: "100vh",
    objectFit: "cover"
  },
  paragraph: {
    marginVertical: 100,
    lineHeight: "3em"
  },
  contents: {
    paddingVertical: 100
  }
});

export default function App() {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <div className={classes.root}>
      <img src={img} className={classes.img} alt="header" />
      <Box mx={50} sx={{ textAlign: "center" }}>
        <Box my={10}>
          <p className={classes.paragraph}>
            予告状の謎が解けたようだな。
            <br />
            だが、まだ爆弾は解除できていない。
            <br />
            爆弾は千葉キャンパス内のある場所に置いた。
            <br />
            さあ、タイムリミットまでに特定できるかな…？
          </p>
        </Box>
        <Box my={10}>
          <Button
            onClick={() => {
              navigate("/quest_1");
            }}
            variant="contained"
            sx={{
              width: "30%",
              "&.MuiButton-contained": {
                backgroundColor: "#950623"
              }
            }}
          >
            特定する
          </Button>
        </Box>
      </Box>
    </div>
  );
}
