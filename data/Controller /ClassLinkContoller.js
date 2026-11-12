import { classLinkData } from "../data/classLinkData.js";

export const getClassLink = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Class link information retrieved successfully",
    data: classLinkData
  });
};

export const createClassLink = (req, res) => {
  const { liveClassUrl, schedule, announcements } = req.body;

  if (!liveClassUrl) {
    return res.status(400).json({
      success: false,
      message: "Live class URL is required"
    });
  }

  classLinkData.liveClassUrl = liveClassUrl;

  if (schedule) {
    classLinkData.schedule = schedule;
  }

  if (announcements) {
    classLinkData.announcements = announcements;
  }

  res.status(201).json({
    success: true,
    message: "Class link updated successfully",
    data: classLinkData
  });
};
