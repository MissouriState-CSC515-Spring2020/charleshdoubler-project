<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/">Best Sport</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
            <b-nav-item href="/home">Basketball</b-nav-item>
            <b-nav-item-dropdown text="Sports" right>
                <b-dropdown-item href="/category" src="@/assets/Sport-Triathlon.jpg">Triathlon</b-dropdown-item>
                <b-dropdown-item href="/category" src="@/assets/Sport-Football.jpg">Football</b-dropdown-item>
                <b-dropdown-item href="/category" src="@/assets/Sport-Tennis.jpg">Tennis</b-dropdown-item>
                <b-dropdown-item href="/category" src="@/assets/Sport-Baseball.jpg">Baseball</b-dropdown-item>
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