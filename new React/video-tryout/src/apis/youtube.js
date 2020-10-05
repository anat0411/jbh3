import axios from "axios";

const KEY = "AIzaSyBCXZP-xEtxfPMOcqj6pYwvS1Em8MZa0oc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: `${KEY}`,
  },
});
