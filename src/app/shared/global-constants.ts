export class GlobalConstants{
    
    //message
    public static genericError: string = "Something went wrong, Please try again later";

    public static unauthorized:string = "You are not authorized to access this page"

    public static productExistError = "Product already exist"

    public static productAdded = "Product Added Successfully"

    //regex
    public static nameRegex:string = "[a-zA-Z0-9 ]*";

    public static emailRegex:string = "[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}";

    public static contactNumberRegex:string = "^[e0-9]{10,10}$";

    //variable
    public static error:string = "error";
}