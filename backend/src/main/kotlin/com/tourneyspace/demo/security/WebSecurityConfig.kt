import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.builders.WebSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.firewall.HttpFirewall
import org.springframework.security.web.firewall.StrictHttpFirewall


@Configuration
@EnableWebSecurity
class WebSecurityConfig : WebSecurityConfigurerAdapter() {
    /**
     * Configures the http security
     */

    @Throws(Exception::class)
    override fun configure(http: HttpSecurity) {
        http
                .authorizeRequests()
                .anyRequest()
                .permitAll()
    }

    @Throws(Exception::class)
    override fun configure(web: WebSecurity) {
        web.httpFirewall(allowUrlEncodedSlashHttpFirewall());
    }

    @Bean
    fun allowUrlEncodedSlashHttpFirewall(): HttpFirewall? {
        val fireWall = StrictHttpFirewall()
        fireWall.setAllowUrlEncodedSlash(true)
        return fireWall
    }
}