package com.tourneyspace.demo.domains

data class Team(var name: String,
                var players: String
)

interface TeamRepository {
    fun getAllTeams(): List<Team>
    fun createTeam(teamToCreate: Team)
}