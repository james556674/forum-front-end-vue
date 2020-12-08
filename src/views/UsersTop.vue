// ./src/views/UsersTop.vue
<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />
    <div class="row text-center">
      <UserTop v-for="user in users" :key="user.id" :initial-user="user" />
    </div>
  </div>
</template>

<script>
import NavTabs from "./../components/NavTabs";
import UserTop from "./../components/UserTop";

const dummyData = {
  users: [
    {
      id: 902,
      name: "Serena",
      email: "serena@gmail.com",
      password: "$2a$10$qh4WPjAiZsOxg2sCF2KEP.4P7p9kS6vAeTujIr3cZXfE3vaWVqUMO",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-23T10:13:44.000Z",
      updatedAt: "2020-12-04T20:56:32.000Z",
      Followers: [
        {
          id: 942,
          name: "happy",
          email: "123@gmail.com",
          password:
            "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
          isAdmin: true,
          image: "https://i.imgur.com/NGYrvVa.jpeg",
          createdAt: "2020-12-03T08:45:00.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 942,
            followingId: 902,
            createdAt: "2020-12-03T15:14:09.000Z",
            updatedAt: "2020-12-03T15:14:09.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: true,
          image: "https://i.imgur.com/zFLL9vN.png",
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T19:46:29.000Z",
          Followship: {
            followerId: 2,
            followingId: 902,
            createdAt: "2020-12-04T19:47:00.000Z",
            updatedAt: "2020-12-04T19:47:00.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T20:56:30.000Z",
          Followship: {
            followerId: 1,
            followingId: 902,
            createdAt: "2020-12-07T00:50:29.000Z",
            updatedAt: "2020-12-07T00:50:29.000Z",
          },
        },
      ],
      FollowerCount: 3,
      isFollowed: true,
    },
    {
      id: 942,
      name: "happy",
      email: "123@gmail.com",
      password: "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
      isAdmin: true,
      image: "https://i.imgur.com/NGYrvVa.jpeg",
      createdAt: "2020-12-03T08:45:00.000Z",
      updatedAt: "2020-12-04T20:56:33.000Z",
      Followers: [
        {
          id: 932,
          name: "王曉明",
          email: "123456@gmail.com",
          password:
            "$2a$10$.GiO.vIFy3LMym.YaOTyV.PqS5K95gNFajpFUAm7G0amWg0BgD6ka",
          isAdmin: true,
          image: null,
          createdAt: "2020-12-01T09:20:12.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 932,
            followingId: 942,
            createdAt: "2020-12-03T08:55:32.000Z",
            updatedAt: "2020-12-03T08:55:32.000Z",
          },
        },
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: true,
          image: "https://i.imgur.com/zFLL9vN.png",
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T19:46:29.000Z",
          Followship: {
            followerId: 2,
            followingId: 942,
            createdAt: "2020-12-04T19:47:39.000Z",
            updatedAt: "2020-12-04T19:47:39.000Z",
          },
        },
        {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T20:56:30.000Z",
          Followship: {
            followerId: 1,
            followingId: 942,
            createdAt: "2020-12-07T00:50:33.000Z",
            updatedAt: "2020-12-07T00:50:33.000Z",
          },
        },
      ],
      FollowerCount: 3,
      isFollowed: true,
    },
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
      isAdmin: true,
      image: "https://i.imgur.com/zFLL9vN.png",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-12-04T19:46:29.000Z",
      Followers: [
        {
          id: 932,
          name: "王曉明",
          email: "123456@gmail.com",
          password:
            "$2a$10$.GiO.vIFy3LMym.YaOTyV.PqS5K95gNFajpFUAm7G0amWg0BgD6ka",
          isAdmin: true,
          image: null,
          createdAt: "2020-12-01T09:20:12.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 932,
            followingId: 2,
            createdAt: "2020-12-03T08:43:35.000Z",
            updatedAt: "2020-12-03T08:43:35.000Z",
          },
        },
        {
          id: 942,
          name: "happy",
          email: "123@gmail.com",
          password:
            "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
          isAdmin: true,
          image: "https://i.imgur.com/NGYrvVa.jpeg",
          createdAt: "2020-12-03T08:45:00.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 942,
            followingId: 2,
            createdAt: "2020-12-03T15:05:37.000Z",
            updatedAt: "2020-12-03T15:05:37.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: false,
    },
    {
      id: 912,
      name: "123",
      email: "123@123",
      password: "$2a$10$eHSHhg/V3oNLm59hWWVDyeE3JA6Ufyq7ztCvsqkMaUxk382df4Oq6",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-29T17:19:13.000Z",
      updatedAt: "2020-12-04T20:56:32.000Z",
      Followers: [
        {
          id: 932,
          name: "王曉明",
          email: "123456@gmail.com",
          password:
            "$2a$10$.GiO.vIFy3LMym.YaOTyV.PqS5K95gNFajpFUAm7G0amWg0BgD6ka",
          isAdmin: true,
          image: null,
          createdAt: "2020-12-01T09:20:12.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 932,
            followingId: 912,
            createdAt: "2020-12-03T08:44:10.000Z",
            updatedAt: "2020-12-03T08:44:10.000Z",
          },
        },
        {
          id: 942,
          name: "happy",
          email: "123@gmail.com",
          password:
            "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
          isAdmin: true,
          image: "https://i.imgur.com/NGYrvVa.jpeg",
          createdAt: "2020-12-03T08:45:00.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 942,
            followingId: 912,
            createdAt: "2020-12-03T15:14:17.000Z",
            updatedAt: "2020-12-03T15:14:17.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: false,
    },
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      password: "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-12-04T20:56:30.000Z",
      Followers: [
        {
          id: 942,
          name: "happy",
          email: "123@gmail.com",
          password:
            "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
          isAdmin: true,
          image: "https://i.imgur.com/NGYrvVa.jpeg",
          createdAt: "2020-12-03T08:45:00.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 942,
            followingId: 1,
            createdAt: "2020-12-03T14:57:19.000Z",
            updatedAt: "2020-12-03T14:57:19.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-12-04T20:56:32.000Z",
      Followers: [
        {
          id: 942,
          name: "happy",
          email: "123@gmail.com",
          password:
            "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
          isAdmin: true,
          image: "https://i.imgur.com/NGYrvVa.jpeg",
          createdAt: "2020-12-03T08:45:00.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
          Followship: {
            followerId: 942,
            followingId: 3,
            createdAt: "2020-12-03T14:57:23.000Z",
            updatedAt: "2020-12-03T14:57:23.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 922,
      name: "111",
      email: "111@111",
      password: "$2a$10$Tm5YIdzQb7recZgv/A5ltuS.UtwwyovNqWYr45QfFpBk/vtU3Ppce",
      isAdmin: true,
      image: null,
      createdAt: "2020-11-29T17:42:08.000Z",
      updatedAt: "2020-12-04T20:56:32.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 932,
      name: "王曉明",
      email: "123456@gmail.com",
      password: "$2a$10$.GiO.vIFy3LMym.YaOTyV.PqS5K95gNFajpFUAm7G0amWg0BgD6ka",
      isAdmin: true,
      image: null,
      createdAt: "2020-12-01T09:20:12.000Z",
      updatedAt: "2020-12-04T20:56:33.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
    {
      id: 952,
      name: "ww",
      email: "ww@gmail.com",
      password: "$2a$10$G9O2Fl.NnccMWZ1ST5gxUem9nzv78/lJU4K0KOW3rcp4v1NjWQjkS",
      isAdmin: true,
      image: null,
      createdAt: "2020-12-04T16:22:02.000Z",
      updatedAt: "2020-12-04T20:56:34.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

export default {
  components: {
    NavTabs,
    UserTop,
  },

  data() {
    return {
      users: [],
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.users = dummyData.users;
    },
  },
};
</script>