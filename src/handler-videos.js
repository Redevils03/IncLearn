const {nanoid} = require('nanoid')
const videos = require('./videos')

const addVideoHandler = (request, h) => {
  const {title, link, desc} = request.payload;

  const id = nanoid(15);
  const insertedAt = new Date().toISOString();
  const updatedAt = insertedAt;
  
  const newVideo = {
    id, title, link, desc, insertedAt, updatedAt
  };
  const hasTitle = request.payload.hasOwnProperty('title')
  if (!hasTitle) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan Video. Mohon isi judul video'
    });
    response.code(400);
    return response
  };

  videos.push(newVideo);

  const isSuccess = videos.filter((video) => video.id === id).length > 0;

  if(isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Video berhasil ditambahkan',
      data: {
        videoId: id,
      },
    });
    response.code(201);
    return response;
  } 
  const response = h.response({
    status: 'fail',
    message: 'Gagal menambahkan Video, Mohon isi judul Video',
  });
  response.code(500);
  return response;
};

const getAllVideosHandler = () => ({
  status: 'success',
  data: {
    videos,
  },
});

const getVideoById = (request, h) => {
  const {videoId} = request.params;

  const video = videos.filter((video) => video.id === videoId)[0];

  if(video !== undefined) {
    return {
      status: 'success',
      data : {
        video,
      },
    };
  }
  const response = h.response({
    status: 'fail',
    message: 'Video tidak ditemukan'
  });
  response.code(404);
  return response;

};

const editVideoByIdHandler = (request, h) => {
  const {videoId} = request.params;

  const {title, link, desc} = request.payload;
  const updatedAt = new Date().toISOString();

  if(!title) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal mempebarui video. Mohon isi judul video',
  });
  response.code(400);
  return response;
  };

  const index = videos.findIndex((vid) => vid.id === videoId);

  if(index !== -1) {
    videos[index] = {
      ...videos[index],
      title,
      link,
      desc,
      updatedAt,
    };
    const response = h.response({
      status: 'success',
      message: 'Video berhasil diperbarui',
    })
    response.code(200);
    return response;
  };
};

const deleteVideoByIdHandler = (request, h) => {
  const {videoId} = request.params;

  const index = videos.findIndex((video) => video.id === videoId);

  if(index !== -1) {
    videos.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Video berhasil dihapus',
    });
    response.code(200)
    return response;
  };
  const response = h.response({
    status: 'fail',
    message: 'Video gagal dihapus. Id tidak ditemukan'
  });
  response.code(404);
  return response;
};

module.exports = {addVideoHandler, 
  getAllVideosHandler, 
  getVideoById, 
  deleteVideoByIdHandler, 
  editVideoByIdHandler}