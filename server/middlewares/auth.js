export const auth = async (req, res, next) => {
  try {
    await req.auth();
    next();
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
