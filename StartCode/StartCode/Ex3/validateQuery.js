// validateQuery.js
const validateQuery = (req, res, next) => {
    const { minCredits, maxCredits } = req.query;

    if (minCredits !== undefined) {
        const min = Number(minCredits);
        if (!Number.isInteger(min) || isNaN(min)) {
            return res.status(400).json({ error: "Bad Request", message: "minCredits must be an integer." });
        }
    }

    if (maxCredits !== undefined) {
        const max = Number(maxCredits);
        if (!Number.isInteger(max) || isNaN(max)) {
            return res.status(400).json({ error: "Bad Request", message: "maxCredits must be an integer." });
        }
    }

    if (minCredits !== undefined && maxCredits !== undefined) {
        if (Number(minCredits) > Number(maxCredits)) {
            return res.status(400).json({ 
                error: "Bad Request", 
                message: "minCredits cannot be greater than maxCredits." 
            });
        }
    }

    next();
};

module.exports = validateQuery;