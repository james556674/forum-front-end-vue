<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img :src="profile.image" width="300px" height="300px" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ profile.name }}
          </h5>
          <p class="card-text">
            {{ profile.email }}
          </p>
          <ul class="list-unstyled">
            <li>
              <strong>{{ profile.Comments.length }}</strong> 已評論餐廳
            </li>
            <li>
              <strong>{{ profile.FavoritedRestaurants.length }}</strong>
              收藏的餐廳
            </li>
            <li>
              <strong>{{ profile.Followers.length }}</strong> followings
              (追蹤者)
            </li>
            <li>
              <strong>{{ profile.Followings.length }}</strong> followers
              (追隨者)
            </li>
          </ul>
          <template>
            <router-link
              :to="{ name: 'profile-edit', params: { id: profile.id } }"
              class="btn btn-primary"
            >
              Edit
            </router-link>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialProfile: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      profile: this.initialProfile,
    };
  },
};
</script>