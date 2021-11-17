export default function ({ $axios, $toast }) {
    $axios.onError((error) => {
        if (error.response.data.errors) {
            const obj = error.response.data.errors;
            $toast.error(obj[Object.keys(obj)[0]][0]);
        }
        if (error.response.data.error) {
            $toast.error(error.response.data.error);
        }
    });

    $axios.onResponse((response) => {
        if (response.data) {
            if (response.data.success) {
                $toast.success(response.data.success);
            }

            if (response.data.error) {
                $toast.error(response.data.error);
            }
        }
    });
}
