function FloatValidator(field, errorCode, errorMessage) {
    FieldValidator.apply(this, [field, errorCode, errorMessage]);
    this.isValid = function (request) {
        var value = request.getParameter(field);
        if (!isEmpty(value)) {
            return !isNaN(parseFloat(value));
        }
        return true;
    };
}