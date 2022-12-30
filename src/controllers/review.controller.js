const ReviewModel = require("../model/review.model");

const handleNewReview = async () => {
    try{
        let newReview = new ReviewModel(req.body);
        newReview = await newReview.save();
        return res.status(201).json({
            message: "Review added successfully",
            success: true,
            newReview,
            statusCode: 201
        });
    }catch(error){
        res.status(500).json({
            message: "Review not added",
            success: false,
            error,
            statusCode: 500
        });
    }
}

const handleGetReviews = async () => {
    try{
        const { rating, limit } = req.query;
        let reviews = await ReviewModel.find({ rating: { $gte: rating } }).limit(limit);
        return res.status(201).json({
            message: "Review added successfully",
            success: true,
            reviews,
            statusCode: 201
        });
    }catch(error){
        res.status(500).json({
            message: "Review not added",
            success: false,
            error,
            statusCode: 500
        });
    }
}

module.exports = {
    handleNewReview,
    handleGetReviews
}