import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        // document.title = (akhane ja likhbo seitai title a show korbe)
        document.title = `${title} - Dragon News`;
    }, [title])
};

// onno place theke access korbo tai export korlam
export default useTitle;