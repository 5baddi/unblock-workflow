import Swal from "sweetalert2";

const PRIMARY_BUTTON_BG_COLOR = "#2c405acc";

function popup(title: string, text?: string): void
{
    Swal.fire({
        title,
        text,
        icon: "success",
        confirmButtonColor: PRIMARY_BUTTON_BG_COLOR
    });
}

function error(text: string): void
{
    Swal.fire({
        title: "Oops",
        text,
        icon: "error",
        confirmButtonColor: PRIMARY_BUTTON_BG_COLOR
    });
}

function confirm(title: string): Promise<boolean>
{
    return Swal.fire({
        title,
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Yes',
        confirmButtonColor: PRIMARY_BUTTON_BG_COLOR,
        denyButtonText: 'Cancel'
    })
    .then((result) => {
        if (result.isConfirmed) {
            return true;
        }

        return false;
    });     
}

function apiError(): void
{
    Swal.fire({
        title: "Something's cracking",
        text: "Your actions aren't being processed properly. We apologize for the inconvenience. Please try again and drop a line if troubles persist.",
        icon: "error",
        confirmButtonColor: PRIMARY_BUTTON_BG_COLOR
    });
}

export {
    popup,
    error,
    apiError,
    confirm
}