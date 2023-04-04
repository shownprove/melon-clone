import Song from "../models/Song";

export const mostPlayed = async (req, res) => {
  try {
    const songs = await Song.find({}).sort({ hits: -1 }).limit(10);
    return res.render("mostPlayed", {
      pageTitle: "mostPlayed",
      songs,
    });
  } catch (error) {
    return res.render("mostPlayed", {
      pageTitle: "mostPlayed",
      songs: [],
    });
  }
};
