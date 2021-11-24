import React from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Field } from "formik";
import { values } from "ramda";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,
      previewImage: "",
      previewTitle: "",
      fileList: [
        {
          uid: "-1",
          name: "image.png",
          status: "done",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
        },
      ],
    };
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
      previewTitle:
        file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  handleChange = ({ fileList }) => {
    this.setState({
      fileList,
    });
  };

  render() {
    const { previewVisible, previewImage, fileList, previewTitle } = this.state;
    const uploadButton = (
      <div>
        <PlusOutlined />
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
    );
    return (
      <>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={this.state.fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          beforeUpload={() => false}
        >
          {fileList.length >= 8 ? null : uploadButton}
        </Upload>
        <Modal
          visible={previewVisible}
          title={previewTitle}
          footer={null}
          onCancel={this.handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={previewImage} />
        </Modal>
      </>
    );
  }
}

export default PicturesWall;
// import { Upload, Button, Modal } from "antd";
// import Icon from "@ant-design/icons";

// class PicturesWall extends React.Component {
//   state = {
//     previewVisible: false,
//     previewImage: "",
//     fileList: [],
//   };

//   handleCancel = () => this.setState({ previewVisible: false });

//   handlePreview = (file) => {
//     console.log("file =", file);
//     this.setState({
//       previewImage: file.thumbUrl,
//       previewVisible: true,
//     });
//   };

//   handleUpload = ({ fileList }) => {
//     //---------------^^^^^----------------
//     // this is equivalent to your "const img = event.target.files[0]"
//     // here, antd is giving you an array of files, just like event.target.files
//     // but the structure is a bit different that the original file
//     // the original file is located at the `originFileObj` key of each of this files
//     // so `event.target.files[0]` is actually fileList[0].originFileObj
//     // you store them in state, so that you can make a http req with them later
//     this.setState({ fileList });
//     return fileList;
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     let formData = new FormData();
//     // add one or more of your files in FormData
//     // again, the original file is located at the `originFileObj` key
//     formData.append("file", this.state.fileList[0].originFileObj);
//     //   axios
//     //     .post("http://api.foo.com/bar", formData)
//     //     .then(res => {
//     //       console.log("res", res);
//     //     })
//     //     .catch(err => {
//     //       console.log("err", err);
//     //     });
//     // console.log("fileList =", this.state.fileList);
//   };

//   render() {
//     const { previewVisible, previewImage, fileList } = this.state;
//     const uploadButton = (
//       <div>
//         <Icon type="plus" />
//         <div className="ant-upload-text">Upload</div>
//       </div>
//     );
//     return (
//       <div>
//         <Upload
//           listType="picture-card"
//           fileList={fileList}
//           onPreview={this.handlePreview}
//           onChange={this.handleUpload}
//           beforeUpload={() => false} // return false so that antd doesn't upload the picture right away
//         >
//           {uploadButton}
//         </Upload>

//         <Button
//           onClick={this.handleSubmit} // this button click will trigger the manual upload
//         >
//           Submit
//         </Button>

//         <Modal
//           visible={previewVisible}
//           footer={null}
//           onCancel={this.handleCancel}
//         >
//           <img alt="example" style={{ width: "100%" }} src={previewImage} />
//         </Modal>
//       </div>
//     );
//   }
// }

// export default PicturesWall;
