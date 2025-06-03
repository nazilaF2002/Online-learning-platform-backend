export const successResponse = (res,statusCode,{data}) => {
    res.status(statusCode).json({
        data
    });
};

export const errorResponse = (res,statusCode,{message}) => {
   res.status(statusCode).json({
    message
   });
};