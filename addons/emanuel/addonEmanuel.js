export default function () {
    const fileName = import.meta.url
    const dirName = fileName.substring(0, fileName.lastIndexOf("/"))

    const link = document.createElement("link")
    link.rel ="stylesheet"
    link.type="text/css"
    link.media="screen"
    link.href=`${dirName}/emanuel.css`
    document.head.appendChild(link)


    



}