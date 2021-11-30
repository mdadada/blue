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
import { useNavigate } from "react-router-dom";

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
    width: "40%"
  },
  message: {
    display: "flex",
    justifyContent: "center",

    borderRadius: 10
  }
});

interface GoalProp {
  title: string;
  imgPath: string;
  prevPath: string;
}

const Goal: FC<GoalProp> = ({ title, imgPath, prevPath }) => {
  const classes = useStyles();
  const [img, setImg] = useState();

  const isCorrectPath = () => {
    return true;
    // 不正アクセス用
    // if (!prevPath) return false;
    // const p = prevPath.split("/").slice(-1)[0];
    // return prevPath === "quest_2";
  };

  useEffect(() => {
    import(imgPath).then((res) => {
      setImg(res.default);
    });
  }, []);

  return (
    <div className={classes.root}>
      {isCorrectPath() ? (
        <Box
          mx={50}
          my={10}
          sx={{
            border: "solid 6px white",
            borderRadius: 8,
            padding: 10,
            margin: "10 0",
            backgroundColor: "#950623"
          }}
        >
          <Box my={10}>
            <h1>{title}</h1>
          </Box>
          <Box my={10} sx={{ display: "flex", justifyContent: "center" }}>
            <img className={classes.img} src={img} alt="img" />
          </Box>
          <Box my={10} className={classes.message}>
            <p
              style={{
                fontSize: 16,
                fontFamily: "'メイリオ'",
                lineHeight: "3em"
              }}
            >
              爆弾なんて置くわけないじゃん！
              <br />
              ただのサプライズ！
              <br />
              驚かせようと思ったんだよね、まあ生き延びてよかったね！
              <br />
              END
            </p>
          </Box>
        </Box>
      ) : (
        <Box>不正アクセス</Box>
      )}
    </div>
  );
};

export default Goal;
