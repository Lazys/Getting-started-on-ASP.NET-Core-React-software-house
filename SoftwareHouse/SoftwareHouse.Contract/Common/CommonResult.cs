namespace SoftwareHouse.Contract.Common
{
    public class CommonResult
    {
        public bool IsSuccess { get; set; }
        public string ErrorMessage { get; set; }

        protected CommonResult()
        {
            IsSuccess = true;
        }

        protected CommonResult(string errorMessage)
        {
            IsSuccess = false;
            ErrorMessage = errorMessage;
        }

        public static CommonResult Success()
        {
            return new CommonResult();
        }

        public static CommonResult Failure(string errorMessage)
        {
            return new CommonResult(errorMessage);
        }
    }

    public class CommonResult<T> : CommonResult
    {
        public T Item { get; set; }

        public CommonResult(T item) : base()
        {
            Item = item;
        }

        protected CommonResult(string errorMessage) : base(errorMessage)
        {
        }

        public static CommonResult<T> Success<T>(T item)
        {
            return new CommonResult<T>(item);
        }

        public static CommonResult<T> Failure<T>(string errorMessage)
        {
            return new CommonResult<T>(errorMessage);
        }
    }
}