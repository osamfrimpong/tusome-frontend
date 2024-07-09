import React, { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import {
  CircularProgress,
  Card,
  CardContent,
  Typography,
  Grid,
  LinearProgress,
} from "@mui/material";
import Constants from "../utils/constants";
import { useIndexedDB } from "./auth/IndexedDB";

const useStyles = {
  root: css`
    padding: 16px;
  `,
  title: css`
    margin-bottom: 16px;
  `,
  card: css`
    margin: 16px 0;
  `,
  progress: css`
    margin: 8px 0;
  `,
};

const defaultProgressTracking = [
  {
    title: "Progress",
    progress: 0,
    timeSpent: "0 mins",
    questionsCompleted: 0,
    totalQuestions: 20,
    score: 0,
    status: "Not Started",
  },
];

const Progress = () => {
  const classes = useStyles;
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token] = useIndexedDB("tokens", "token");

  useEffect(() => {
    const fetchProgressData = async () => {
      if (!token) {
        console.error("No token found");
        setProgressData(defaultProgressTracking);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          `${Constants.API_BASE_URL}/dashboard/progress`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data && response.data.length > 0) {
          setProgressData(response.data);
        } else {
          setProgressData(defaultProgressTracking);
        }
      } catch (error) {
        console.error("There was an error fetching the progress data!", error);
        setProgressData(defaultProgressTracking);
      } finally {
        setLoading(false);
      }
    };

    fetchProgressData();
  }, [token]);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div css={classes.root}>
      <Grid container spacing={3}>
        {progressData.map((progress, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card elevation={3} css={classes.card}>
              <CardContent>
                <Typography variant="h6">{progress.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Status: {progress.status}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Score: {progress.score}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Completed At: {progress.completed_at}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Time Spent: {progress.timeSpent}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Questions Completed: {progress.questionsCompleted}/
                  {progress.totalQuestions}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={progress.progress}
                  css={classes.progress}
                />
                <Typography variant="body2" color="textSecondary">
                  Progress: {progress.progress}%
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Progress;
