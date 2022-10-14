export const apiHome = async (req, res) => {
  try {
    return res.status(200).json({ message: "Welcome to Fitmedik's API" });
  } catch (error) {
    console.log(error.message);
    return res.status(200).json({ message: "Internal Server Error" });
  }
};
