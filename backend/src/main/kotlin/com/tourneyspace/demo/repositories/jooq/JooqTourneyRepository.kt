package com.tourneyspace.demo.repositories.jooq

import com.tourneyspace.demo.domains.Tourney
import com.tourneyspace.demo.domains.TourneyRepository
import com.tourneyspace.jooq.generated.Tables.TOURNEY
import com.tourneyspace.jooq.generated.tables.records.TourneyRecord
import org.jooq.DSLContext
import org.springframework.stereotype.Repository
import java.util.*

@Repository
class JooqTourneyRepository(val jooq: DSLContext) : TourneyRepository {

    override fun createTourney(tourneyToCreate: Tourney) {
        val tourneyId = UUID.randomUUID().toString()
        jooq.insertInto(TOURNEY)
                .set(TOURNEY.TOURNEYID, tourneyId)
                .set(TOURNEY.NAME, tourneyToCreate.name)
                .set(TOURNEY.LOCATION, tourneyToCreate.location)
                .set(TOURNEY.IMAGE, tourneyToCreate.image)
                .set(TOURNEY.DATE, tourneyToCreate.date)
                .set(TOURNEY.TEAMS, tourneyToCreate.teams)
                .set(TOURNEY.COURTS, tourneyToCreate.courts)
                .set(TOURNEY.STARTTIME, tourneyToCreate.startTime)
                .set(TOURNEY.PAUSE, tourneyToCreate.pause)
                .set(TOURNEY.GAMELENGTH, tourneyToCreate.gamelength)
                .execute()
        (jooq.selectFrom(TOURNEY).where(TOURNEY.TOURNEYID.eq(tourneyId)).fetchOne()).asTourney()
    }

    override fun deleteTourney(tourney: Tourney) {
        jooq.executeDelete(tourney.asRecord())
    }

    override fun getAllTourneys() =
            jooq.selectFrom(TOURNEY).map { it.asTourney() }


    override fun findByTourneyId(tourneyId: String): Tourney = jooq.selectFrom(TOURNEY)
            .where(TOURNEY.TOURNEYID.eq(tourneyId)).fetchOne().asTourney()

    /**
     * This function converts a ProductRecord to a Product-Object
     */
    private fun TourneyRecord.asTourney(): Tourney =
            Tourney(tourneyid, name, location, image, date, teams, courts, starttime, pause, gamelength)

    /**
     * This function converts a Product-Object to a ProductRecord
     */
    private fun Tourney.asRecord(): TourneyRecord =
            TourneyRecord(tourneyId, name, location, image, date, teams, courts, startTime, pause, gamelength)
}