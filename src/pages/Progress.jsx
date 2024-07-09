import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import {
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const useStyles = {
  root: css`
    padding: 16px;
  `,
  title: css`
    margin-bottom: 16px;
  `,
};

const Progress = () => {
  const classes = useStyles;
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${Constants.API_BASE_URL}/dashboard/progress`)
      .then((response) => {
        setProgressData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the progress data!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div css={classes.root}>
      <Typography variant="h4" css={classes.title}>
        Progress
      </Typography>
      <List>
        {progressData.map((progress) => (
          <ListItem key={progress.id}>
            <ListItemText
              primary={`Question ID: ${progress.question_id}`}
              secondary={`Status: ${progress.status}, Score: ${progress.score}, Completed At: ${progress.completed_at}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Progress;
