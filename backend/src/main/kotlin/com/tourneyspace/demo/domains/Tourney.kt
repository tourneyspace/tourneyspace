package com.tourneyspace.demo.domains

import java.util.*

data class Tourney(var name: String,
                   var location: String,
                   var image: String,
                   var date: Date,
                   var teams: List<String>,
                   var courts: Int,
                   var startTime: Date,
                   var pause : Date,
                   var gamelength: Double
)

interface TourneyRepository {
    fun getAllTourneys(): List<Tourney>
}