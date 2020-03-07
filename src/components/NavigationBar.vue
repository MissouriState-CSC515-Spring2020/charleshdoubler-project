<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <router-link :to="'/'" class="navbar-brand"><h3>Best Sport</h3></router-link> 

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item>
                <router-link class="nav-link" :to="'/'">Basketball</router-link>
            </b-nav-item>
            <b-nav-item-dropdown text="Sports" right>
                <router-link class="nav-link text-dark" :to="'/category'">Triathlon</router-link>

                <router-link class="nav-link text-dark" :to="'/category'">Triathlon</router-link>
            
                <router-link class="nav-link text-dark" :to="'/category'">Triathlon</router-link>
                
                <router-link class="nav-link text-dark" :to="'/category'">Triathlon</router-link>
            </b-nav-item-dropdown>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
    name: 'NavigationBar'
}
</script>