// ./src/views/Restaurant.vue
<template>
  <div class="container py-5">
    <h1>餐廳描述頁</h1>
    <RestaurantDetail :initial-restaurant="restaurant" />
    <!-- 餐廳資訊頁 RestaurantDetail -->
    <hr />
    <!-- 餐廳評論 RestaurantComments -->
    <RestaurantComments
      :restaurantComments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from "./../components/RestaurantDetail";
import RestaurantComments from "./../components/RestaurantComments";
import CreateComment from "./../components/CreateComment";

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true,
  },
  isAuthenticated: true,
};

const dummyData = {
  restaurant: {
    id: 1,
    name: "Maxie Trantow V",
    tel: "890-533-5519 x71749",
    address: "1268 Bosco Prairie",
    opening_hours: "08:00",
    description:
      "Officiis aut excepturi ipsa. Et ratione eveniet unde laboriosam aut. Explicabo autem eos pariatur aut molestiae perspiciatis debitis. Et repellat consequatur sapiente velit.",
    image:
      "https://loremflickr.com/320/240/restaurant,food/?random=51.756313654300044",
    viewCounts: 169,
    createdAt: "2020-11-23T10:08:45.000Z",
    updatedAt: "2020-12-07T14:17:19.663Z",
    CategoryId: 4,
    Category: {
      id: 4,
      name: "墨西哥料理",
      createdAt: "2020-11-23T10:08:45.000Z",
      updatedAt: "2020-11-23T10:08:45.000Z",
    },
    FavoritedUsers: [
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
        isAdmin: true,
        image: "https://i.imgur.com/zFLL9vN.png",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-12-07T09:31:21.000Z",
        Favorite: {
          UserId: 2,
          RestaurantId: 1,
          createdAt: "2020-03-07T14:43:52.000Z",
          updatedAt: "2020-03-07T14:43:52.000Z",
        },
      },
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
        Favorite: {
          UserId: 932,
          RestaurantId: 1,
          createdAt: "2020-12-03T08:12:35.000Z",
          updatedAt: "2020-12-03T08:12:35.000Z",
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
        Favorite: {
          UserId: 942,
          RestaurantId: 1,
          createdAt: "2020-12-03T14:31:37.000Z",
          updatedAt: "2020-12-03T14:31:37.000Z",
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
        Favorite: {
          UserId: 1,
          RestaurantId: 1,
          createdAt: "2020-12-07T08:23:08.000Z",
          updatedAt: "2020-12-07T08:23:08.000Z",
        },
      },
    ],
    LikedUsers: [
      {
        id: 2,
        name: "user1",
        email: "user1@example.com",
        password:
          "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
        isAdmin: true,
        image: "https://i.imgur.com/zFLL9vN.png",
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-12-07T09:31:21.000Z",
        Like: {
          UserId: 2,
          RestaurantId: 1,
          createdAt: "2020-03-07T14:42:45.000Z",
          updatedAt: "2020-03-07T14:42:45.000Z",
        },
      },
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
        Like: {
          UserId: 932,
          RestaurantId: 1,
          createdAt: "2020-12-01T09:27:21.000Z",
          updatedAt: "2020-12-01T09:27:21.000Z",
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
        Like: {
          UserId: 942,
          RestaurantId: 1,
          createdAt: "2020-12-03T14:31:46.000Z",
          updatedAt: "2020-12-03T14:31:46.000Z",
        },
      },
    ],
    Comments: [
      {
        id: 1,
        text: "Ut nostrum velit esse autem nesciunt et.",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T20:56:30.000Z",
        },
      },
      {
        id: 51,
        text: "Eum doloremque a.",
        UserId: 2,
        RestaurantId: 1,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        User: {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$s7ShjXk/VR4nVoFtm9PLG.LR6x7wv77vwouGXoKssT7Xfk/rOsQZe",
          isAdmin: true,
          image: "https://i.imgur.com/zFLL9vN.png",
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:21.000Z",
        },
      },
      {
        id: 101,
        text: "Explicabo praesentium aliquam.",
        UserId: 3,
        RestaurantId: 1,
        createdAt: "2020-11-23T10:08:45.000Z",
        updatedAt: "2020-11-23T10:08:45.000Z",
        User: {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$TPKFC8BS5/E37CFM3kx8yOPya6L5ifI0S8aFQ7b3jdA.oEzjXwYby",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-07T09:31:22.000Z",
        },
      },
      {
        id: 5772,
        text: "HAHAHAHAHA",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2020-11-30T07:34:04.000Z",
        updatedAt: "2020-11-30T07:34:04.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T20:56:30.000Z",
        },
      },
      {
        id: 6042,
        text: "hihi",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2020-12-03T07:16:12.000Z",
        updatedAt: "2020-12-03T07:16:12.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T20:56:30.000Z",
        },
      },
      {
        id: 6052,
        text: "hi",
        UserId: 932,
        RestaurantId: 1,
        createdAt: "2020-12-03T08:43:02.000Z",
        updatedAt: "2020-12-03T08:43:02.000Z",
        User: {
          id: 932,
          name: "王曉明",
          email: "123456@gmail.com",
          password:
            "$2a$10$.GiO.vIFy3LMym.YaOTyV.PqS5K95gNFajpFUAm7G0amWg0BgD6ka",
          isAdmin: true,
          image: null,
          createdAt: "2020-12-01T09:20:12.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
        },
      },
      {
        id: 6062,
        text: "看起來好好吃!",
        UserId: 942,
        RestaurantId: 1,
        createdAt: "2020-12-03T08:45:55.000Z",
        updatedAt: "2020-12-03T08:45:55.000Z",
        User: {
          id: 942,
          name: "happy",
          email: "123@gmail.com",
          password:
            "$2a$10$OZJy/T5fYv.S4SfIeGFIYe8VetSmhtjK07yXAvUzafKUDv1HVe7yq",
          isAdmin: true,
          image: "https://i.imgur.com/NGYrvVa.jpeg",
          createdAt: "2020-12-03T08:45:00.000Z",
          updatedAt: "2020-12-04T20:56:33.000Z",
        },
      },
      {
        id: 6072,
        text: "你哪位啊?",
        UserId: 1,
        RestaurantId: 1,
        createdAt: "2020-12-04T15:25:07.000Z",
        updatedAt: "2020-12-04T15:25:07.000Z",
        User: {
          id: 1,
          name: "root",
          email: "root@example.com",
          password:
            "$2a$10$0dBI.8S//NhlGeouBUbV3.oBDkdbbqXObuMJyuS.PHxjzdW/PvqYy",
          isAdmin: true,
          image: null,
          createdAt: "2020-11-23T10:08:45.000Z",
          updatedAt: "2020-12-04T20:56:30.000Z",
        },
      },
    ],
  },
  isFavorited: true,
  isLiked: false,
};

export default {
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment,
  },

  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryName: "",
        image: "",
        openingHours: "",
        tel: "",
        address: "",
        description: "",
        isFavorited: false,
        isLiked: false,
      },
      restaurantComments: [],
      currentUser: dummyUser.currentUser,
    };
  },

  created() {
    const { id } = this.$route.params;
    const restaurantId = id;
    this.fetchRestaurant(restaurantId);
  },

  methods: {
    fetchRestaurant(restaurantId) {
      console.log("id", restaurantId);
      const { restaurant, isFavorited, isLiked } = dummyData;
      const {
        id,
        name,
        Category,
        image,
        opening_hours,
        tel,
        address,
        description,
        Comments,
      } = restaurant;

      this.restaurant = {
        id: id,
        name: name,
        categoryName: Category ? Category.name : "未分類",
        image: image,
        openingHours: opening_hours,
        tel: tel,
        address: address,
        description: description,
        isFavorited: isFavorited,
        isLiked: isLiked,
      };
      this.restaurantComments = Comments;
    },

    afterDeleteComment(commentId) {
      console.log(commentId);
      this.restaurantComments = this.restaurantComments.filter(
        (comment) => comment.id !== commentId
      );
    },
    afterCreateComment(payload) {
      console.log(payload);
      const { commentId, text, restaurantId } = payload;

      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name,
        },
        text,
        createdAt: new Date(),
      });
    },
  },
};
</script>