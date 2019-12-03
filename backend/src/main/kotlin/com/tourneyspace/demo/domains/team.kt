package com.tourneyspace.demo.domains

data class Team(var name: String,
                var players: String
)

interface ProductRepository {
    fun getAllTeams(): List<Team>
}