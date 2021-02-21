namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSuccess { get; set; }
        public T Value { get; set; }
        public string Error { get; set; }

        public static Result<T> Success(T value) => new Result<T>
        {
            IsSuccess = true,
            Value = value
        };
        public static Result<T> Success2(T value)
        {
            var result = new Result<T>();
            result.IsSuccess = true;
            result.Value = value;
            return result;
        }

        public static Result<T> Failure(string error) => new Result<T>
        {
            Error = error,
            IsSuccess = false
        };
    }

}